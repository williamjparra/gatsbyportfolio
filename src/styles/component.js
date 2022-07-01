import styled from 'styled-components'

export const colors = {
    purpleStrong: '#3E2F73',
    purpleMedium: '#453A8C',
    purpleLigth: '#AAA4BF',
    greyMedium: '#182126',
    lightBlue: '#23C7D9',
    Black: '#000'
}

export const BasicContainer = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    padding-top: 128px;
`

export const BlogPostBodyContainer = styled.article`
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    text-aling: left;
    margin-top: 128px;
    padding: 0 32px;
    header {
        padding-bottom: 32px;
        border-bottom: solid 1px #ededed;
        margin-bottom: 16px;
        h1 {
            font-size: 80px;
        }
    }
    p {
        font-size: 20px;
        font-weight: 300;
        letter-spacing: -0.003em;
        color: #F7F4F3;
        a {
            color: #adb5bd;
            text-decoration: none;
            font-weight: 500;
            transition-duration: 0.27s;
            text-decoration: underline;
        }
        a:hover {
            color: #CC5803;
            transition-duration: 0.27s;
        }
    }
    blockquote {
        border: solid 2px rgb(15,15,15);
        border-left: solid 10px #182126;
        padding: 0 4px 16px 16px;
        padding-bottom: 16px;
        background: rgba(10,10,10, 1);
        color: grey;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        margin-bottom: 32px;
        border-radius: 0 5px 5px 0;
    }
    blockquote blockquote {
        margin-bottom: 16px;
    }
    blockquote > * {
        color: #F7F4F3;
        font-weight: 400;
    }
`

export const BodyContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
`

export const AllBlogPostContainer = styled.section`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
`
