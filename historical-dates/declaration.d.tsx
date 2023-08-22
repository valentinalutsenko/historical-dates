//для найстройки css-module

declare module "*.module.scss" {
  const value: Record<string, string>;
  export default value;
}
