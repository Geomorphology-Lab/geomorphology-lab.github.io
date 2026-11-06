import { contact } from '../content/site'
import { PageHeader } from '../components/common/PageHeader'
import { EmailText } from '../components/common/EmailText'
import { BuildingIcon, MailIcon, PhoneIcon, PinIcon } from '../components/common/Icons'

export default function ContactPage() {
  const rows = [
    { icon: BuildingIcon, label: 'University', value: <span>{contact.university}</span> },
    { icon: BuildingIcon, label: 'Department', value: <span lang="ko">{contact.department}</span> },
    { icon: PinIcon, label: 'Location', value: <span lang="ko">{contact.location}</span> },
    { icon: MailIcon, label: 'Email', value: <EmailText value={contact.email} /> },
    { icon: PhoneIcon, label: 'Phone', value: <span lang="ko">{contact.phone}</span> },
  ]
  return (
    <>
      <PageHeader eyebrow="Contact" title="Contact" lead={contact.intro} />
      <div className="bg-ink-900 py-16 md:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
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
            <div className="mt-12 border-l-2 border-accent pl-6">
              <h2 className="text-xl font-semibold">Prospective Students</h2>
              <p lang="ko" className="prose-body mt-3">{contact.prospective}</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            {contact.mapEmbedUrl ? (
              <iframe
                src={contact.mapEmbedUrl}
                title="Laboratory location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full border border-line"
              />
            ) : (
              <div className="topo-pattern relative flex aspect-[4/3] w-full items-center justify-center border border-line" role="img" aria-label={contact.mapDescription}>
                <div className="flex max-w-xs flex-col items-center px-6 text-center">
                  <span className="flex size-12 items-center justify-center rounded-full border border-accent/60 text-accent">
                    <PinIcon className="size-5" />
                  </span>
                  <p lang="ko" className="mt-5 text-[1rem] leading-[1.7] text-fg">{contact.mapDescription}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
