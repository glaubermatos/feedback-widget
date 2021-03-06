import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from ".."
import { api } from "../../../lib/api";
import { CloseButton } from "../../CloseButton"
import { Loading } from "../../Loading";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
    feedbackType: FeedbackType;
}

export function FeedbackContentStep( { onFeedbackRestartRequested, onFeedbackSent, feedbackType }: FeedbackContentStepProps) {

    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState("")
    const [isSendingFeedback, setIsSendFeedback] = useState(false)

    const feedbackTypeInfo = feedbackTypes[feedbackType]

    async function handleSubmitFeedback(event: FormEvent) {
        setIsSendFeedback(true)
        event.preventDefault()

        await api.post('/feedbacks', {
            type: feedbackType,
            comment,
            screenshot
        })
        
        setIsSendFeedback(false)
        onFeedbackSent()
    }

    return(
        <>
            <header>

                <button 
                    onClick={onFeedbackRestartRequested} 
                    type="button" 
                    className="top-5 left-5 absolute text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100" 
                >
                    <ArrowLeft weight="bold" className="w-4 h4" />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className='w-6 h-6' />
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton />
            </header>
            
            <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-800 dark:text-zinc-100 border-zinc-300 dark:border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes o que est?? acontecendo..."
                    value={comment}
                    onChange={(event) => setComment(event.currentTarget.value)}
                />

                <footer className="flex gap-2 mt-2">

                    <ScreenshotButton
                      screenshot={screenshot}
                      onScreenshotTook={setScreenshot} 
                    />

                    <button
                        type="submit"
                        className="p-2 text-brand-50 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                        disabled={comment.length === 0 || isSendingFeedback}
                    >
                        { isSendingFeedback ? <Loading /> : 'Enviar feedback' }
                    </button>
                    
                </footer>
            </form>

        </>
    )
}