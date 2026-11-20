export type SocialEvent = {
    method: string;
    msgId?: string;
    isHistory?: boolean;
} & {
    type: "social";
    user: {
        userId: string;
        nickname: string;
        uniqueId: string;
        secUid: string;
        avatarUrl?: string;
    };
    action: number;
    followCount: number;
    shareCount: number;
    shareType?: number;
    shareTarget?: string;
    shareDisplayStyle?: number;
    followType?: number;
    scene?: string;
    targetUserId?: string;
};
export declare const SocialEventSchema: {
    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    readonly $id: "https://ttl-live.dev/schema/public/social-event.schema.json";
    readonly title: "ttl-live Social Event";
    readonly "x-typescript-name": "SocialEvent";
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
                readonly const: "social";
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
            readonly action: {
                readonly type: "integer";
                readonly minimum: 0;
                readonly maximum: 9007199254740991;
            };
            readonly followCount: {
                readonly type: "integer";
                readonly minimum: 0;
                readonly maximum: 9007199254740991;
            };
            readonly shareCount: {
                readonly type: "integer";
                readonly minimum: 0;
                readonly maximum: 9007199254740991;
            };
            readonly shareType: {
                readonly type: "integer";
                readonly minimum: 0;
                readonly maximum: 9007199254740991;
            };
            readonly shareTarget: {
                readonly type: "string";
            };
            readonly shareDisplayStyle: {
                readonly type: "integer";
                readonly minimum: 0;
                readonly maximum: 9007199254740991;
            };
            readonly followType: {
                readonly type: "integer";
                readonly minimum: 0;
                readonly maximum: 9007199254740991;
            };
            readonly scene: {
                readonly type: "string";
            };
            readonly targetUserId: {
                readonly type: "string";
                readonly pattern: "^-?[0-9]+$";
                readonly description: "Raw int64 target; negative wire sentinels are preserved.";
            };
        };
        readonly required: readonly ["type", "user", "action", "followCount", "shareCount"];
        readonly additionalProperties: true;
        readonly "x-typescript-no-index": true;
    }];
};
//# sourceMappingURL=social-event.d.ts.map