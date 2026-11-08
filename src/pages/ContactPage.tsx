import { contact } from '../content/site'
import { PageHeader } from '../components/common/PageHeader'
import { EmailText } from '../components/common/EmailText'
import { ArrowUpRight, MailIcon, PinIcon } from '../components/common/Icons'
import { headerPhotos } from '../content/pageImages'

const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(contact.map.query)}&hl=ko&z=17&output=embed`
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.map.query)}`

export default function ContactPage() {
  const rows = [
    { icon: MailIcon, label: 'Email', value: <EmailText value={contact.email} /> },
    { icon: PinIcon, label: 'Location', value: <span lang="ko">{contact.location}</span> },
  ]
  return (
    <>
      <PageHeader eyebrow="Contact" title="Contact" photo={headerPhotos.contact} />
      <div className="theme-paper py-16 md:py-24">
        <div className="container-page flex flex-col gap-14 lg:gap-16">
          <dl className="border-t border-line">
            {rows.map(({ icon: Icon, label, value }) => (
              <div key={label} className="grid grid-cols-[2.25rem_1fr] gap-x-3 border-b border-line py-6">
                <Icon className="mt-0.5 size-5 text-accent" />
                <div>
                  <dt className="eyebrow mb-2 text-fg-subtle">{label}</dt>
                  <dd className="text-[1rem] leading-[1.7] text-fg">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
          <div>
            <figure>
              <div className="relative aspect-square w-full overflow-hidden border border-line bg-ink-700 sm:aspect-[4/3] lg:aspect-[21/9]">
                <iframe
                  src={mapEmbed}
                  title={`Map: ${contact.map.label}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 size-full border-0"
                />
              </div>
              <figcaption className="mt-4 flex flex-col gap-3 text-sm text-fg-muted sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <span>
                  <span className="block text-fg">{contact.map.label}</span>
                  <span className="mt-1 block">{contact.map.address}</span>
                </span>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex shrink-0 items-center gap-2 font-medium text-fg transition-colors hover:text-accent"
                >
                  <span className="border-b border-line-strong pb-0.5 transition-colors group-hover:border-accent">Open in Google Maps</span>
                  <ArrowUpRight className="size-4" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  )
}
