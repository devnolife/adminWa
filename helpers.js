
const phoneNumberFormatter = function (number) {
    let formatted = number.replace(/\D/g, '');
    if (formatted.startsWith('0')) {
        formatted = '62' + formatted.substr(1);
    }
    if (!formatted.endsWith('@c.us')) {
        formatted += '@c.us';
    }

    return formatted;
}

const messageFormatter = function (relawan) {
    const formatted = `Assalamualaikum warahmatullahi wabarakatuh \n\nHalo ${relawan}, Kakak Adik yang Baik Hati, Perhatian! Beberapa dari kita belum mengirimkan inputan calon pemilih. Jika mengalami kendala dalam aplikasi, segera hubungi kami.Terima kasih,Salam Kemenangan !!!\n\nAdmin Aplikasi👍`
    return `${formatted}`;
}

const messageFormaterUrutan = (relawan, jumlahInputan, urutan) => {
    const formatted = `Assalamualaikum warahmatullahi wabarakatuh \n\nHalo ${relawan} ,kakak memiliki inputan dengan jumlah  ${jumlahInputan} terbanyak ke ${urutan}, Terima Kasih pastisipasinya , 
    Kami nantikan inputan berikutnya,Kak. Jika mengalami kendala dalam aplikasi,segera hubungi kami.Terima kasih,Salam Kemenangan !!\n\nAdmin Aplikasi👍`
    return `${formatted}`;

}

module.exports = {
    phoneNumberFormatter,
    messageFormatter,
    messageFormaterUrutan
}