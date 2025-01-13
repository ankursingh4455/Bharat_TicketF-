/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "How do I upload my train ticket if I cancel my trip?",
        answer:
            "You could simply contact me and I will upload that. Although it's manual for now, out team of dedicated developers are working hard on adding this feature so that your experience becomes as seemless as possible."
    },
    {
        question: "Is there any fee or charge for using this service?",
        answer:
            "We charge a very nominal fee for our service. It's just enough for us to keep going while we help you travel."
    },
    {
        question: "How do I find a ticket that matches my travel plans?",
        answer:
            "There is a table section on this page. You could look up the data to see if a ticket matches your requirement."
    },
    {
        question: "What should I do after finding a ticket that I want to use?",
        answer:
            "After you successfully find a relevant ticket, use the call button to get in touch with me and I will provide you with the ticket."
    }
]


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function FAQ() {
    return (
        <div id='faq' className="bg-gray-50">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
                    <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Frequently asked questions
                    </h2>
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt className="text-lg">
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                                <span className="font-medium text-gray-900">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    <ChevronDownIcon
                                                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base text-gray-500">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
