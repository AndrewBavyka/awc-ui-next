export const AwcUserInfoStatusTypes = ["none", "complete", "fail"] as const;
export type AwcUserInfoStatus = typeof AwcUserInfoStatusTypes[number];

export const AwcUserInfoTargetTypes = ["_blank", "_self", "_parent", "_top"] as const;
export type AwcUserInfoTarget = typeof AwcUserInfoTargetTypes[number];