function mergeSettings(savedSettingsJSON, defaultSettings) {

    if (typeof defaultSettings !== "object" || defaultSettings === null) {
        return "INVALID INPUT";
    }

    if (typeof savedSettingsJSON !== "object" || savedSettingsJSON === null) {
        return "INVALID INPUT";
    }

    const merged = {};

    for (let key in defaultSettings) {
        merged[key] = defaultSettings[key];
    }

    for (let key in savedSettingsJSON) {
        merged[key] = savedSettingsJSON[key];
    }

    return {
        mergedObject: merged,
        mergedJSON: JSON.stringify(merged)
    };
}

// calling the function
const defaultSettings = { theme: "light", notifications: true };
const savedSettingsJSON = { theme: "dark" };

console.log(mergeSettings(savedSettingsJSON, defaultSettings));