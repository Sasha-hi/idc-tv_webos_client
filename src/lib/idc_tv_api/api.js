const Api = {
    url: 'http://iptvn.idc.md/'
}

Api.signInWithEmailAndPassword = (email, password) => {
    const formData = new FormData();
    formData.append('act', 'login');
    formData.append('code_login', email);
    formData.append('code_pass', password);
    formData.append('softid', 'web-ktv-001');

    // return fetch(Api.url, {
    //     method: 'POST',
    //     credentials: 'include',
    //     headers: {
    //         'content-type': 'application/x-www-form-urlencoded',
    //         'upgrade-insecure-requests': '1'
    //     },
    //     referrerPolicy: 'no-referrer-when-downgrade',
    //     body: formData
    // });

    let promise = new Promise(resolve => setTimeout(resolve, 3000));

    return promise
        .then(() => {
            // throw new Error('TEst');
        });
}

export {Api}