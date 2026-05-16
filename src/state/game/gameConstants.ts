export const GAME_MODES = [
  {
    value: 1,
    label: 'Friend',
    description: 'Play on the same device with a friend.',
  },
  {
    value: 2,
    label: 'Bot',
    description: 'Challenge an AI opponent.',
  },
  {
    value: 3,
    label: 'Online',
    description: 'Match with players over the network.',
  },
] as const

export type GameMode = (typeof GAME_MODES)[number]['value']
