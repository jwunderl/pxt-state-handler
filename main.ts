interface Character {
    name: string;
    modifiers: Modifier[];
    states: CharacterState[];
    default?: CharacterState;
}

type Asset = StaticImage | FrameSet;
type Modifier = string;
type Effect = string;

interface StaticImage {
    src: Image;
    anchorX?: number;
    anchorY?: number;
}

interface FrameSet {
    frames: StaticImage[];
    interval: number;
    loop?: boolean;
}

interface CharacterState {
    modifiers: Modifier[];
    asset: Asset;

    interval?: number; // overrides asset interval
    hitbox?: HitboxOptions;
    effects?: EffectOptions[];
}

interface CharacterAction extends CharacterState {
    blocking: boolean;
    time: number;
    next?: CharacterAction;
}

interface HitboxOptions {
    anchorX?: number;
    anchorY?: number;
    width: number;
    height: number;
}

interface EffectOptions {
    effect: Effect;
}

interface ParticleEffectOptions extends EffectOptions {
    rate?: number;
    // etc.
}