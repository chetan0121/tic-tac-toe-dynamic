interface ConfigHeaderProps {
  eyebrow: string
  title: string
  subtitle: string
  modeLabel?: string
}

function ConfigHeader({ eyebrow, title, subtitle, modeLabel }: ConfigHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <p className="font-['Montserrat'] text-xs tracking-[0.45em] text-white/45 uppercase">
        {eyebrow}
      </p>
      <h1 className="font-['Oswald'] text-4xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h1>
      <p className="max-w-sm font-['Montserrat'] text-sm leading-6 text-white/65 md:text-base">
        {subtitle}
      </p>
      {modeLabel ? (
        <span className="mt-2 inline-flex items-center rounded-full border border-[hsl(38,95%,54%)]/35 bg-white/5 px-3 py-1 text-xs font-medium text-white/75">
          {modeLabel}
        </span>
      ) : null}
    </div>
  )
}

export default ConfigHeader
