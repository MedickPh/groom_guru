export async function sendMessageToTelegramBot(message) {
    const token = '6425652142:AAF4Y4d6nI6bmXYM7suFOmFYe1cEblpsunY';
    const chatId = '953296828';
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    try {
        const response = await fetch(url, { method: 'GET' });
        const responseData = await response.json();

        if (!responseData.ok) {
            throw new Error(responseData.description || 'Unknown error');
        }

        console.log('Message sent successfully');
    } catch (error) {
        console.log(error);
        throw error
    }
}