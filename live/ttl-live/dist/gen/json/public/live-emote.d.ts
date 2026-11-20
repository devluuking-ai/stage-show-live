export type LiveEmote = {
    id: string;
    shortcode?: string;
    imageUrl?: string;
    index?: number;
    emoteType?: number;
    packageId?: string;
};
export declare const LiveEmoteSchema: {
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
//# sourceMappingURL=live-emote.d.ts.map