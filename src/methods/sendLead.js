export async function sendMessageToTelegramBot(message) {
    const token = '6637122759:AAFbBvHkzYiDds5MsmMoBmhfnvoEb-vgldc';
    const chatId = '-4137214562';
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