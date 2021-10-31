import tree from './tree.js';
import { saveAs } from 'file-saver';
 
const commands = [
	{
		name: "echo",
		run: (args, settings, setSettings, messages, addMessage) => {
			if (!args[1]) return addMessage({
				content: "required a option[on, off] or text",
				user: false,
				echo: false,
				margin: true,
			})

			if (args[1] === "on") {
				setSettings({
					...settings,
					echo: true
				})

				addMessage({
					content: "echo now is 'on'",
					user: false,
					echo: false,
					margin: true
				})
			} else if (args[1] === "off") {
				setSettings({
					...settings,
					echo: false
				})

				addMessage({
					content: "echo now is 'off'",
					user: false,
					echo: false,
					margin: true
				})
			} else {
				addMessage({
					content: args.slice(1).join(" "),
					user: false,
					echo: false,
					margin: true
				})
			}
		}
	},
	{
		name: "color",
		run: (args, settings, setSettings, messages, addMessage) => {

			let color = args[1];
			let colors = ['a', 'b', 'c', 'd'];

			if (!color) return addMessage({
				content: `required a colors[${colors.join(", ")}]`,
				user: false,
				echo: false,
				margin: true,
			})


			let check = colors.find(x => x == color);
			if (!check) {
				return addMessage({
					content: `not a color name. [${colors.join(", ")}]`
				})
			}

			setSettings({
				...settings,
				color: check
			})

			addMessage({
				content: `color changed to '${check}'`,
				user: false,
				echo: false,
				margin: true
			})
		}
	},
	{
		name: "redirect",
		aliases: ["rd"],
		run: (args, settings, setSettings, messages, addMessage, setMessages, window) => {
			let link = args.slice(1).join(" ");

			if (!link) return addMessage({
				content: "required url/link",
				user: false,
				echo: false,
				margin: true,
			})

			window.open(link, '_blank');

			addMessage({
				content: `redirecting to ${link}`,
				user: false,
				echo: false,
				margin: true,
			})
		}
	},
	{
		name: "clear",
		aliases: ["cls"],
		run: (args, settings, setSettings, messages, addMessage, setMessages, window) => {
			setMessages([])
		}
	},
	{
		name: "tree",
		run: async (args, settings, setSettings, messages, addMessage, setMessages, window) => {
			addMessage({
				content: 'This website is cannot show you the file tree because: out of memory',
				user: false,
				echo: false,
				margin: true
			})
		}
	},
	{
		name: "repeat",
		run: (args, settings, setSettings, messages, addMessage, setMessages, window) => {
			let content = args.slice(1).join(" ");
			if (!content) return addMessage({
				content: "required text",
				user: false,
				echo: false,
				margin: true
			})

			setSettings({
				...settings,
				disableInput: true,
				disableEffect: true
			})

			let time = 5;

			let msgs = [];

			function addRMsg(obj) {
				setMessages([
					...msgs,
					obj
				])
				msgs.push(obj);
			}

			addRMsg(
				{
					content: `Repeat will start in ${time}`,
					user: false,
					echo: false
				})
			time--


			let wait = setInterval(() => {
				addRMsg({
					content: `Repeat will start in ${time}`,
					user: false,
					echo: false
				});
				time--;
			}, 1000);

			setTimeout(() => {
				let first = true;
				clearInterval(wait);
				setInterval(() => {
					if (first) {
						addRMsg({
							content: content,
							user: false,
							echo: false
						});
						return first = false;
					} 
						addRMsg(
							{
								content: content,
								user: false,
								echo: false
							}
						)
				}, 10)
			}, time * 1000 + 1000)
		}
	},
	{
		name: "help",
		aliases: ["h"],
		run: (args, settings, setSettings, messages, addMessage, setMessages, window) => {
			addMessage({
				content: `
${commands.map(cmd => `${cmd.name}`).join(", ")}
`,
				user: false,
				echo: false,
				margin: true
			})
		}
	},
	{
		name: "username",
		aliases: ["user"],
		run: (args, settings, setSettings, messages, addMessage, setMessages, window) => {
			let username = args.slice(1).join(" ");
			if (!username) {
				return addMessage({
					content: settings.username,
					user: false,
					echo: false,
					margin: true
				})
			} else {
				setSettings({
					...settings,
					username
				});

				addMessage({
					content: `your username changed to ${username}`,
					user: false,
					echo: false,
					margin: true
				})
			}
		}
	},
	{
		name: "save-ts",
		aliases: ["sts"],
		run: (args, settings, setSettings, messages, addMessage, setMessages, window) => {
			let blob = new Blob([messages.map(x => x.content).join("\n")], { type: "text/plain" });
			saveAs(blob, 'RCS.transcript.txt');

			addMessage({
				content: "Transcript has been exported",
				user: false,
				echo: false,
				margin: true
			})
		}
	},
	{
		name: "refresh",
		aliases: ["rf"],
		run: (args, settings, setSettings, messages, addMessage, setMessages, window) => {
			window.location.reload();
			addMessage({
				content: "refreshing page...",
				user: false,
				echo: false,
				margin: true
			})
		}
	}
]

export default commands;