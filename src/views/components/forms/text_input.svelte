<script>
  import { afterUpdate } from 'svelte'

  export let inputName = 'text'
  export let id = 'text'
  export let label = ''
  export let value = ''
  export let icon = null
  export let error = false
  export let isFocused = false
  export let errorMessage = 'Please enter a value'
  export let helpText = ''

  afterUpdate(() => {
    M.updateTextFields()
  })
</script>

<div class="input-field">
  {#if icon}
    <i class="material-icons prefix">{icon}</i>
  {/if}
  <input
    bind:value
    on:input={() => (error = false)}
    type="text"
    name={inputName}
    {id}
    class:invalid={error}
    autofocus={isFocused}
    on:blur />
  <label for={id}>{label}</label>
  <span class="helper-text" data-error={errorMessage} data-success="right">{helpText}</span>
</div>
