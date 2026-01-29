import { ifDevice, map, rule, writeToProfile } from "karabiner.ts";
import { hrm } from "karabiner.ts-greg-mods";

const appleKeyboards = [
	{ vendor_id: 1452 },
	{ vendor_id: 76 },
	{ is_built_in_keyboard: true },
];

writeToProfile("Default", [

	rule("Home Row Mods").manipulators(
		hrm(
			new Map([
				["a", "l⌃"],
				["s", "l⌥"],
				["d", "l⌘"],
				["f", "l⇧"],
				["j", "r⇧"],
				["k", "r⌘"],
				["l", "r⌥"],
				["semicolon", "r⌃"],
			]),
		)
			.lazy(true)
			.holdTapStrategy("permissive-hold")
			.chordalHold(true)
			.simultaneousThreshold(50)
			.tappingTerm(150)
			.build(),
	),

	rule("Caps Lock -> Escape (Apple keyboards only)").manipulators([
		map("caps_lock")
			.to("escape")
			.toIfAlone("caps_lock")
			.condition(ifDevice(appleKeyboards)),
	]),

	rule("Disable arrow keys (Apple keyboards only)").manipulators([
		map("up_arrow").to("vk_none").condition(ifDevice(appleKeyboards)),
		map("down_arrow").to("vk_none").condition(ifDevice(appleKeyboards)),
		map("left_arrow").to("vk_none").condition(ifDevice(appleKeyboards)),
		map("right_arrow").to("vk_none").condition(ifDevice(appleKeyboards)),
	]),

	rule("Disable command keys (Apple keyboards only)").manipulators([
		map("left_command").to("vk_none").condition(ifDevice(appleKeyboards)),
		map("right_command").to("vk_none").condition(ifDevice(appleKeyboards)),
	]),
]);
