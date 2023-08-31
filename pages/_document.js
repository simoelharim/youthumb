import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
            <p>Welcome to our YouTube Thumbnail Downloader: Your Tool for Eye-Catching Thumbnails!</p>
            <p>Are you a content creator looking to enhance the visual appeal of your YouTube videos? The thumbnail is the first thing viewers see, making it a crucial element in attracting their attention. Our YouTube Thumbnail Downloader is here to help you create captivating thumbnails that make your videos impossible to ignore.</p>

            <p>What is a YouTube Thumbnail Downloader?</p>

            <p>A YouTube Thumbnail Downloader is a convenient online tool that allows you to easily extract and download the thumbnail image from any YouTube video. It's designed to simplify the process of obtaining these images, which are often vibrant and eye-catching, to use for your own videos or other creative projects.</p>

            <p>How to Download Thumbnails Using Our Tool:</p>

            <p>Using our YouTube Thumbnail Downloader is a breeze. Just follow these simple steps:</p>

            <ol>
              <li>Find the YouTube Video: Start by locating the YouTube video for which you want to download the thumbnail. Copy the URL of the video from your web browser.</li>
              <li>Paste the URL: Come back to our Thumbnail Downloader and paste the copied URL into the designated box.</li>
              <li>Generate and Choose: Click the "Generate Thumbnails" button. Our tool will retrieve the available thumbnail options for the video. You can now preview these options.</li>
              <li>Download Your Thumbnail: Once you've selected the thumbnail that best suits your needs, simply click the "Download" button below the chosen thumbnail. The image will be saved to your device.</li>
            </ol>

            <p>Tips for Effective Thumbnail Usage:</p>

            <ul>
              <li>Be Relevant: Ensure that your chosen thumbnail accurately represents the content of your video. Misleading thumbnails can lead to viewer frustration.</li>
              <li>High Quality: Opt for high-resolution thumbnails to maintain image clarity and professionalism.</li>
              <li>Contrasting Text and Images: If you choose to add text to your thumbnail, make sure it's easy to read by using contrasting colors and clear fonts.</li>
              <li>Stay Consistent: Establish a consistent style for your thumbnails to create a recognizable brand identity.</li>
              <li>Aim for Emotion: Thumbnails that evoke emotions or curiosity tend to attract more clicks.</li>
            </ul>

            <p>With our YouTube Thumbnail Downloader, you have the power to transform your video's first impression. Create thumbnails that spark interest, increase clicks, and ultimately drive more viewers to your content.</p>

            <p>Start using our Thumbnail Downloader today and unlock the potential of your YouTube channel!</p>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
