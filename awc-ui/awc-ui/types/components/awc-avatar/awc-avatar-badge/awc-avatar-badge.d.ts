import { LitElement, TemplateResult, CSSResult } from "lit";
import { AwcAvatarBadgeSize, AwcAvatarBadgeStatus } from "./awc-avatar-badge.types";
export declare const awcAvatarBadgeTag = "awc-avatar-badge";
export default class AwcAvatarBadge extends LitElement {
    status: AwcAvatarBadgeStatus;
    size: AwcAvatarBadgeSize;
    protected render(): TemplateResult;
    static styles?: CSSResult;
}
