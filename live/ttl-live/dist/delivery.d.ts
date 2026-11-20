export interface DeliveryOptions {
    /** Zero (default) preserves synchronous EventEmitter delivery. */
    capacity: number;
    maxBytes?: number;
    batchSize?: number;
    timeBudgetMs?: number;
}
export interface DeliveryMetrics {
    queueDepth: number;
    queuedBytes: number;
    received: number;
    dispatched: number;
    discarded: number;
    rejections: number;
}
/** One bounded FIFO and one owned immediate. Overflow terminates delivery through the owner. */
export declare class EventDelivery<T> {
    #private;
    constructor(options: DeliveryOptions | undefined, consume: (value: T, generation: number) => boolean, overflow: (error: Error) => void);
    submit(value: T, generation: number, bytes: number): void;
    clear(): void;
    metrics(): DeliveryMetrics;
}
//# sourceMappingURL=delivery.d.ts.map