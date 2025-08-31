import { saveUserSettings, userSettings } from "@/globals/userSettings";
import runAccessibility from "./runAccessibility";
import { getDefaultLanguage } from "@/i18n/getDefaultLanguage";
import { changeLanguage } from "@/i18n/changeLanguage";


export default function reset() {
    document?.querySelectorAll(".asw-selected")?.forEach(el => el?.classList?.remove("asw-selected"))

    userSettings.states = {};
    //userSettings.lang = ;
    
    runAccessibility();
    saveUserSettings();

    changeLanguage(getDefaultLanguage());
}