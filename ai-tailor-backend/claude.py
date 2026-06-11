import anthropic
import os



client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

def analyse_cv(cv_text: str, job_description: str) -> dict:
    shared = f"CV:\n{cv_text}\n\nJob description:\n{job_description}"

    cv_feedback = client.messages.create(
        model="claude-opus-4-5",
        max_tokens= 300,
        system = "You are a CV Reviewer, Review the CV against the job description. Find any gaps, missing keywords, skills, experience, or qualifications, give a score out of 10, explain what should be added or removed, and provide actionable improvements to maximize ATS score and interview chances.",
        messages=[
            {
            "role" : "user",
            "content" : shared,
            }
        ]
    )

    cv_revamp = client.messages.create(
        model="claude-opus-4-5",
        max_tokens= 500,
        system = "You are an expert CV writer, recruiter, and ATS specialist. Using my current CV and the job description, rewrite my CV to maximise interview chances while remaining truthful. Tailor every section to the role, improve wording, incorporate relevant ATS keywords naturally, strengthen bullet points with action verbs and measurable achievements, and remove weak or irrelevant content. Present the final CV in a professional, modern format that is concise, easy to read, and optimised for both recruiters and ATS systems. Output plain text.",
        messages=[
            {
                "role": "user",
                "content" : shared
            }
        ]
    )

    cover_letter = client.messages.create(
        model="claude-opus-4-5",
        max_tokens= 500,
        system = "Your an experienced recruiter and professional cover letter writer. Using my CV and the job description, create a compelling, tailored cover letter that directly addresses the employer's needs. Emphasise the experiences, skills, and achievements from my CV that best match the role, naturally incorporate important keywords from the job description, and explain how I can add value to the organisation. Keep the letter professional, engaging, and specific to the role rather than generic. End with a confident call to action and maintain a length of 250-1000 words. do not sound generic, sound human, plain text output ",
        messages= [{
            "role" : "user",
            "content" : shared,
        }]
    )

    return {
        "feedback": cv_feedback.content[0].text,
        "cv": cv_revamp.content[0].text,
        "cover": cover_letter.content[0].text
    }

    