import { pipeline } from "@xenova/transformers";

export async function summarize(text){
    try {
        console.log("Summarizing")
        const generator = await pipeline(
            "summarization",
            "Xenova/distilbart-cnn-12-6"
        )
        
        const output = await generator(text)

        console.log("Video summarized")
        return output[0].summary_text
    } catch (error) {
        console.log("Failed to summarize", error)
        throw new Error(error)
    }
}