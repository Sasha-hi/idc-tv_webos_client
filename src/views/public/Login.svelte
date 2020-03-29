<script>
    import {navigateTo} from 'svelte-router-spa'
    import validate from 'validate.js'
    import {Api} from '../../lib/idc_tv_api/api'
    import PasswordInput from '../../views/components/forms/password_input.svelte'
    import TextInput from '../../views/components/forms/text_input.svelte'

    const loginConstraints = {
        username: {
            presence: {allowEmpty: false},
        },
        password: {
            presence: {allowEmpty: false},
        }
    }

    let username = ''
    let usernameError = false
    let usernameMessage = ''
    let passwordMessage = ''
    let password = ''
    let passwordError = false
    let disableAction = false
    let loginFailed = false

    const resetErrorInfo = () => {
        usernameError = false
        usernameMessage = ''
        passwordError = false
        passwordMessage = ''
    }

    const validateLoginForm = () => {
        resetErrorInfo()
        const validationResult = validate({username, password}, loginConstraints)
        if (!validationResult) {
            return true
        } else {
            if (validationResult.username && validationResult.username.length > 0) {
                usernameMessage = validationResult.username[0]
                usernameError = true
            }
            if (validationResult.password && validationResult.password.length > 0) {
                passwordMessage = validationResult.password[0]
                passwordError = true
            }
        }

        return false
    }

    const signInUser = () => {
        loginFailed = false
        disableAction = true
        if (validateLoginForm()) {
            Api.signInWithEmailAndPassword(username, password)
                    .then(() => {
                        // notificationMessage.set({ message: 'Welcome back!', type: 'success-toast' })
                        navigateTo('video')
                        disableAction = false
                    })
                    .catch(error => {
                        // notificationMessage.set({ message: error.message, type: 'danger-toast' })
                        console.error(error)
                        console.error(JSON.stringify(error))
                        disableAction = false
                        loginFailed = true
                    })
        } else {
            disableAction = false
        }
    }
</script>

<style>
    .login-page {
        width: 360px;
        padding: 8% 0 0;
        margin: auto;
    }

    .form {
        position: relative;
        z-index: 1;
        background: #FFFFFF;
        max-width: 360px;
        margin: 0 auto 100px;
        padding: 45px;
        text-align: center;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }

    .form button {
        width: 100%;
    }

    .form .message {
        margin: 15px 0 0;
        color: #b3b3b3;
        font-size: 12px;
    }

    .form .message a {
        color: #4CAF50;
        text-decoration: none;
    }
</style>

<div class="login-page">
    <div class="form">
        <form ref="form" on:submit|preventDefault={signInUser}>
            <TextInput bind:value={username} error={usernameError} isFocused={true} errorMessage={usernameMessage}
                       label="Username"/>
            <PasswordInput bind:value={password} error={passwordError} errorMessage={passwordMessage} label="Password"/>

            {#if disableAction}
                <div class="preloader-wrapper small active">
                    <div class="spinner-layer spinner-green-only">
                        <div class="circle-clipper left">
                            <div class="circle"/>
                        </div>
                        <div class="gap-patch">
                            <div class="circle"/>
                        </div>
                        <div class="circle-clipper right">
                            <div class="circle"/>
                        </div>
                    </div>
                </div>
            {:else}
                <button type="submit" class="btn-large waves-effect waves-light">login</button>
            {/if}

            {#if loginFailed}
                <p class="message">Login failed</p>
            {/if}
        </form>
    </div>
</div>