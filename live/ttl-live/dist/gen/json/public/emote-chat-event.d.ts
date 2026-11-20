export type EmoteChatEvent = {
    method: string;
    msgId?: string;
    isHistory?: boolean;
} & {
    type: "emoteChat";
    user: {
        userId: string;
        nickname: string;
        uniqueId: string;
        secUid: string;
        avatarUrl?: string;
    };
    emotes: Array<{
        id: string;
        shortcode?: string;
        imageUrl?: string;
        index?: number;
        emoteType?: number;
        packageId?: string;
    }>;
};
export declare const EmoteChatEventSchema: {
    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    readonly $id: "https://ttl-live.dev/schema/public/emote-chat-event.schema.json";
    readonly title: "ttl-live Emote Chat Event";
    readonly "x-typescript-name": "EmoteChatEvent";
    readonly allOf: readonly [{
        readonly $schema: "https://json-schema.org/draft/2020-12/schema";
        readonly $id: "https://ttl-live.dev/schema/public/base-event.schema.json";
        readonly title: "ttl-live Base Event";
        readonly "x-typescript-name": "BaseEvent";
        readonly type: "object";
        readonly properties: {
            readonly method: {
                readonly type: "string";
            };
            readonly msgId: {
                readonly type: "string";
                readonly pattern: "^[0-9]+$";
            };
            readonly isHistory: {
                readonly type: "boolean";
            };
        };
        readonly required: readonly ["method"];
        readonly additionalProperties: true;
        readonly "x-typescript-no-index": true;
    }, {
        readonly type: "object";
        readonly properties: {
            readonly type: {
                readonly const: "emoteChat";
            };
            readonly user: {
                readonly $schema: "https://json-schema.org/draft/2020-12/schema";
                readonly $id: "https://ttl-live.dev/schema/public/event-user.schema.json";
                readonly title: "ttl-live Event User";
                readonly "x-typescript-name": "EventUser";
                readonly type: "object";
                readonly properties: {
                    readonly userId: {
                        readonly type: "string";
                        readonly pattern: "^[0-9]+$";
                    };
                    readonly nickname: {
                        readonly type: "string";
                    };
                    readonly uniqueId: {
                        readonly type: "string";
                    };
                    readonly secUid: {
                        readonly type: "string";
                    };
                    readonly avatarUrl: {
                        readonly type: "string";
                        readonly format: "uri";
                    };
                };
                readonly required: readonly ["userId", "nickname", "uniqueId", "secUid"];
                readonly additionalProperties: false;
            };
            readonly emotes: {
                readonly type: "array";
                readonly items: {
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
                    readonly $id: "https://ttl-live.dev/schema/public/live-emote.schema.json";
                    readonly title: "ttl-live Live Emote";
                    readonly "x-typescript-name": "LiveEmote";
                    readonly description: "A graphical emote carried by a LIVE comment or emote message. Optional fields are omitted when the wire did not carry them; they are never filled with a guessed default.";
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "The original emote identifier, verbatim.";
                        };
                        readonly shortcode: {
                            readonly type: "string";
                            readonly description: "The textual shortcode (for example \"[laughcry]\"), only when reliably known.";
                        };
                        readonly imageUrl: {
                            readonly type: "string";
                            readonly format: "uri";
                            readonly description: "Artwork URL from the protobuf ImageModel.";
                        };
                        readonly index: {
                            readonly type: "integer";
                            readonly description: "Raw EmoteWithIndex.index. Its unit is not confirmed, so it is preserved unmodified and never used to slice text.";
                        };
                        readonly emoteType: {
                            readonly type: "integer";
                            readonly description: "Raw EmoteModel.emote_type enum value when non-zero.";
                        };
                        readonly packageId: {
                            readonly type: "string";
                            readonly description: "Original package identifier for creator-specific or custom emotes.";
                        };
                    };
                    readonly required: readonly ["id"];
                    readonly additionalProperties: false;
                };
            };
        };
        readonly required: readonly ["type", "user", "emotes"];
        readonly additionalProperties: true;
        readonly "x-typescript-no-index": true;
    }];
};
//# sourceMappingURL=emote-chat-event.d.ts.map