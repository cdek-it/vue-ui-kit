export default function builderProp(target: any, propKey: string) {
  // Get the class's prototype
  const prototype = target.constructor.prototype;

  // Define the new method
  prototype['set' + propKey.charAt(0).toUpperCase() + propKey.slice(1)] =
    function (val: any) {
      this[propKey] = val;
      return this;
    };
}
