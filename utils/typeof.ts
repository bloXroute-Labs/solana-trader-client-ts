export function JSONRPCErrorMessage(jsonObject: Object): boolean {
    let propertyNames = ["code", "message", "data"]
    for (let propertyName in propertyNames) {
        if (!jsonObject.hasOwnProperty(propertyName)) {
            return false;
        }
    }
    return true;
}