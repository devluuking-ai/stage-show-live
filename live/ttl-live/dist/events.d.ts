import type { EmoteModel, EmoteWithIndex } from './gen/webcast/model/base/emoji_pb.js';
import type { ChatEvent, EmoteChatEvent, EventUser, GiftEvent, LikeEvent, LiveEmote, LiveEvent, MemberEvent, RoomUserEvent, SocialEvent, UnknownEvent } from './types.js';
export declare const METHOD: Readonly<{
    chat: "model.message.WebcastChatMessage";
    emoteChat: "model.message.WebcastEmoteChatMessage";
    gift: "model.message.WebcastGiftMessage";
    like: "model.message.WebcastLikeMessage";
    member: "model.message.WebcastMemberMessage";
    social: "model.message.WebcastSocialMessage";
    roomUser: "model.message.WebcastRoomUserSeqMessage";
}>;
export declare const EVENT: Readonly<{
    chat: "chat";
    emoteChat: "emoteChat";
    gift: "gift";
    like: "like";
    member: "member";
    social: "social";
    roomUser: "roomUser";
    unknown: "unknown";
}>;
export declare const MAX_EMOTES_PER_EVENT = 64;
export declare const MAX_EMOTE_ID_LENGTH = 128;
export declare const MAX_EMOTE_URL_LENGTH = 2048;
export declare function safeCount(value: bigint | number): number;
export declare function decodeUser(payload?: Uint8Array): EventUser;
/**
 * Map one generated emote onto the stable public shape.
 *
 * Optional fields are omitted, never sent as a "confirmed" default, and `shortcode` is never
 * fabricated: the v3 schema has no field verified to be the textual one, so a numeric id must not
 * become a display name. Mirrors `normalize::normalize_emote` in Rust.
 */
export declare function normalizeEmote(emote: EmoteModel | undefined, index?: number): LiveEmote | undefined;
export declare function normalizeInlineEmotes(emotes: readonly EmoteWithIndex[]): LiveEmote[];
export declare function normalizeStandaloneEmotes(emotes: readonly EmoteModel[]): LiveEmote[];
export declare const label: (user: EventUser) => string;
export declare const SOCIAL_ACTION: Readonly<{
    follow: 1;
    share: 3;
}>;
export type SocialKind = 'follow' | 'share' | 'other' | 'unknown';
export type SocialConfidence = 'confirmed' | 'inferred' | 'unknown';
export interface SocialClassification {
    kind: SocialKind;
    confidence: SocialConfidence;
    rawAction: number;
}
/**
 * Classify a `WebcastSocialMessage.action` code. This is the same table as
 * `classify_action` in `crates/ttl-live-events/src/social.rs`, pinned by
 * `fixtures/events/social-classification.json`.
 *
 * Classification is driven by `action` alone. `followCount`/`shareCount` are
 * cumulative room totals and are *not* evidence of a new interaction — a share
 * message still carries a non-zero `followCount`, so deciding by "the first
 * positive counter" mislabels every share as a follow.
 *
 * `0` is `unknown` rather than a guess: proto3 cannot distinguish an absent
 * field from an explicit zero.
 */
export declare function classifySocialAction(action: number): SocialClassification;
export declare function decodeEvent(method: typeof METHOD.chat, payload: Uint8Array): ChatEvent | UnknownEvent;
export declare function decodeEvent(method: typeof METHOD.emoteChat, payload: Uint8Array): EmoteChatEvent | UnknownEvent;
export declare function decodeEvent(method: typeof METHOD.gift, payload: Uint8Array): GiftEvent | UnknownEvent;
export declare function decodeEvent(method: typeof METHOD.like, payload: Uint8Array): LikeEvent | UnknownEvent;
export declare function decodeEvent(method: typeof METHOD.member, payload: Uint8Array): MemberEvent | UnknownEvent;
export declare function decodeEvent(method: typeof METHOD.social, payload: Uint8Array): SocialEvent | UnknownEvent;
export declare function decodeEvent(method: typeof METHOD.roomUser, payload: Uint8Array): RoomUserEvent | UnknownEvent;
export declare function decodeEvent(method: string, payload: Uint8Array): LiveEvent;
//# sourceMappingURL=events.d.ts.map