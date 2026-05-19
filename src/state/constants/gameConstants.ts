// Shared option types and game setup constants.

// Base value types for selectable options.
export type OptionValue = string | number | null

// Core option shape shared by dropdowns and config lists.
export interface OptionItem<T extends OptionValue = OptionValue> {
  readonly value: T
  readonly label: string
  readonly description: string
}

// Selection contract for option pickers.
export interface OptionSelection<T extends OptionValue = OptionValue> {
  options: readonly OptionItem<T>[]
  currentOption: T
  selectOption: (value: T) => void
}

// Game setup options reuse the shared option shape.
export type GameConfigOption<T extends OptionValue = OptionValue> = OptionItem<T>

// A simple helper type to handle the "readonly array" part once.
type ConfigList = readonly GameConfigOption[]

export const GAME_MODES: ConfigList = [
  {
    value: 'friend',
    label: 'Friend',
    description: 'Play on the same device with a friend.',
  },
  {
    value: 'bot',
    label: 'Bot',
    description: 'Challenge an AI opponent.',
  },
  {
    value: 'online',
    label: 'Online',
    description: 'Match with players over the network.',
  },
]

export const GAME_TIME_CONTROLS: ConfigList = [
  {
    value: null,
    label: 'Infinite',
    description: 'No time limit per turn.',
  },
  {
    value: 1,
    label: '1m',
    description: '1 minute per turn.',
  },
  {
    value: 2,
    label: '2m',
    description: '2 minutes per turn.',
  },
  {
    value: 5,
    label: '5m',
    description: '5 minutes per turn.',
  },
  {
    value: 10,
    label: '10m',
    description: '10 minutes per turn.',
  },
]

export const GAME_MOVE_LIMITS: ConfigList = [
  { value: null, label: 'Infinite', description: 'No move cap.' },
  { value: 25, label: '25', description: 'Up to 25 total moves.' },
  { value: 50, label: '50', description: 'Up to 50 total moves.' },
  { value: 100, label: '100', description: 'Up to 100 total moves.' },
]

/** Derived Types from Configuration */

export type GameMode = (typeof GAME_MODES)[number]['value']

// Turn time settings in minutes (-1 = infinite).
export type GameTimeControl = (typeof GAME_TIME_CONTROLS)[number]['value']

// Max moves allowed (-1 = infinite).
export type GameMoveLimit = (typeof GAME_MOVE_LIMITS)[number]['value']
