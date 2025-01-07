import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'Find properties for sale or rent',
    message: 'Find properties for sale or rent'
  },
  {
    heading: 'Explore luxury apartments or villas',
    message: 'Explore luxury apartments or villas'
  },
  {
    heading: 'Know about property prices in Portugal',
    message: 'Know about property prices in Portugal'
  },
  {
    heading: 'Get advice on buying a home in Portugal',
    message: 'Get advice on buying a home in Portugal'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
