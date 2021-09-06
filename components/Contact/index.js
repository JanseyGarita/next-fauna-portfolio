import { spacing } from '@/variables/global'
import useMessages from 'hooks/useMessages'
import { useState } from 'react'
import ActionButton from '../Buttons/ActionButton'
import Loader from '../Loader'
import Section from '../Section'

const EntryForm = ({ onSubmit: onSubmitProp }) => {
  const INITIAL_FORM_VALUES = {
    name: '',
    message: '',
  }
  const [values, setValues] = useState(INITIAL_FORM_VALUES)
  const [formState, setFormState] = useState('initial')
  const isSubmitting = formState === 'submitting'

  const handleSubmit = (e) => {
    e.preventDefault()

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
      <form className="my-4" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            aria-label="Name"
            disabled={isSubmitting}
            onChange={handleOnChange('name')}
            placeholder="Sheldon Cooper"
            required
            value={values.name}
          />
        </label>
        <label>
          Message
          <textarea
            aria-label="Message"
            disabled={isSubmitting}
            onChange={handleOnChange('message')}
            placeholder="I'm not crazy. My mother had me tested."
            required
            rows={5}
            value={values.message}
          />
        </label>
        {isSubmitting ? (
          <Loader />
        ) : (
          <ActionButton type="submit" disabled={isSubmitting}>
            Send!
          </ActionButton>
        )}
      </form>

      <style jsx>{`
        label {
          display: flex;
          letter-spacing: 0.035rem;
          flex-direction: column;
          margin: ${spacing.spacing05} 0;
        }

        label input,
        label textarea {
          border: 1px solid #eaeaea;
          letter-spacing: 0.025rem;
          padding: ${spacing.spacing03} ${spacing.spacing04};
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
          If you have got any questions or want me to work with you, please send me an email to{' '}
          <a href="mailto:janseygarita@gmail.com">janseygarita@gmail.com</a> or
          fill in the contact form below.
        </p>
        <EntryForm onSubmit={onSubmit} />
      </div>
    </Section>
  )
}

export default ContactMe
