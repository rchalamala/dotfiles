import { map, rule, writeToProfile } from "karabiner.ts";
import { hrm } from "karabiner.ts-greg-mods";

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
			.simultaneousThreshold(90)
			.tappingTerm(110)
			.build(),
	),

	rule("Caps Lock -> Escape").manipulators([
		map("caps_lock").to("escape").toIfAlone("caps_lock"),
	]),
]);
