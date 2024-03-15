import axios from "axios";

const handler = async (m, { text: prompt, command, conn }) => {
	conn["user_txt2img"] = conn["user_txt2img"] ? conn["user_txt2img"] : {};
	conn["user_txt2img_queue"] = conn["user_txt2img_queue"]
		? conn["user_txt2img_queue"]
		: {};
	if (m.sender in conn["user_txt2img_queue"]) {
		return m.reply("Please wait for the previous process to finish");
	}
	conn["user_txt2img"][m.sender] = conn["user_txt2img"][m.sender]
		? conn["user_txt2img"][m.sender]
		: {
				server_name: "frieren",
				width: 512,
				height: 768,
				steps: 25,
				model_id: "dream_shaper",
				sampler: "UniPC",
				seed: null,
				cfg: 7.5,
				image_num: 1,
				negative_prompt: "ugly",
				safety_checker: "no",
				enhance_prompt: "no",
				multi_lingual: "yes",
				clip_skip: 2,
				panorama: "no",
				lora_model: "more_details",
				hiresFix: "no",
				lora_strength: 1,
				embeddings_model: "",
		  };
	if (prompt.startsWith("set")) {
		// can be split using |
		let [_, key, value] = prompt.split(" ");
		if (!(key in conn.user_txt2img[m.sender])) {
			return m.reply(
				`*${key}* not exist!\n\n*Here list of keys:*\n${Object.keys(
					conn.user_txt2img[m.sender]
				)
					.map((v) => `❏ ${v}`)
					.join("\n")}\nExample:\n*${command}* set model_id dream_shaper`
			);
		}
		value = value === "null" ? null : value;
		conn["user_txt2img"][m.sender][key] = value;
		return m.reply(`*${key}* successfully set to *${value}*`);
	}

	conn["user_txt2img_queue"][m.chat] = true;

	m.reply("_Preparing Stable diffusion..._");

	const { data } = await axios
		.request({
			baseURL: "https://api.itsrose.life",
			url: "/image/diffusion/txt2img",
			method: "POST",
			params: {
				apikey: `${global.rose}`,
			},
			data: {
				prompt,
				...conn["user_txt2img"][m.sender],
			},
		})
		.catch((e) => e?.response);

	const { status, result } = data;

	if (!status) {
		let message = "";
		for (const key in data) {
			message += `*${key}*: ${data[key]}\n`;
		}
		delete conn["user_txt2img_queue"][m.sender];
		return m.reply(message); // see the full response
	}
	const { images, metadata, generation_time } = result;
	let metadatas = "";
	for (const key in metadata) {
		metadatas += `*${key}*: ${metadata[key]}\n`;
	}
	m.reply(metadatas);

	try {
		await new Promise((resolve) => {
			setTimeout(async () => {
				for (const url of images) {
					await conn.sendMessage(
						m.chat,
						{
							image: {
								url,
							},
						},
						{ quoted: m }
					);
				}
				resolve();
			}, generation_time * 1000);
		});
	} catch {
		m.reply(`Failed sending image: ${images.join(", ")}`);
	}
	delete conn["user_txt2img_queue"][m.sender];
};

handler.command = handler.help = ["txt2img"];
handler.tags = ["ai","internet"];
handler.register = true;
handler.limit = true;
handler.premium = true;

export default handler;