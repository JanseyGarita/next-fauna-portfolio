import { spacing } from '@/variables/global'
import useMessages from 'hooks/useMessages'
import { useState } from 'react'
import ActionButton from '../Buttons/ActionButton'
import Section from '../Section'

const EntryForm = ({ onSubmit: onSubmitProp }) => {
  const INITIAL_FORM_VALUES = {
    name: '',
    message: '',
  }
  const [values, setValues] = useState(INITIAL_FORM_VALUES)
  const [formState, setFormState] = useState('initial')
  const isSubmitting = formState === 'submitting'

  const onSubmit = (ev) => {
    ev.preventDefault()

    setFormState('submitting')
    onSubmitProp(values)
      .then(() => {
        setValues(INITIAL_FORM_VALUES)
        setFormState('submitted')
      })
      .catch(() => {
        setFormState('failed')
      })
  }

  const handleOnChange = (fieldName) => {
    return ({ target: { value } }) =>
      setValues({
        ...values,
        [fieldName]: value,
      })
  }

  return (
    <>
      <form className="my-4" onSubmit={onSubmit}>
        <label>
          Name
          <input
            required
            aria-label="Name"
            placeholder="Sheldon Cooper"
            value={values.name}
            onChange={handleOnChange('name')}
          />
        </label>
        <label>
          Message
          <input
            required
            aria-label="Message"
            placeholder="I'm not crazy. My mother had me tested."
            value={values.message}
            onChange={handleOnChange('message')}
          />
        </label>
        <ActionButton type="submit" disabled={isSubmitting}>
          Send!
        </ActionButton>
      </form>

      <style jsx>{`
        label {
          display: flex;
          flex-direction: column;
          margin: ${spacing.spacing05} 0;
        }

        label input {
          border: 1px solid #eaeaea;
          padding: ${spacing.spacing01} ${spacing.spacing03};
        }
      `}</style>
    </>
  )
}

const ContactMe = () => {
  const { onSubmit } = useMessages()
  return (
    <Section
      classNameWrapper="scrollspy"
      id="contact-me"
      number="04"
      title="contact me"
    >
      <div>
        <p>
          If you have got any questions please send me an email to{' '}
          <a href="mailto:janseygarita@gmail.com">janseygarita@gmail.com</a> or
          fill in the contact form below.
        </p>
        <EntryForm onSubmit={onSubmit} />
      </div>
    </Section>
  )
}

export default ContactMe
