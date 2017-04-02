import * as React from 'react';
import {Field, reduxForm, FormProps} from 'redux-form';

export interface FormData {
    scep_type: 'internal' | 'external';
    scep_url: string;
}

interface CAConfigurationFormProps extends FormProps<FormData, any, any> {

}

@reduxForm<FormData, CAConfigurationFormProps, undefined>({
    form: 'ca_configuration'
})
export class CAConfigurationForm extends React.Component<CAConfigurationFormProps, undefined> {
    render() {
        const {
            handleSubmit
        } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='column'>
                        <label>
                            <Field name='scep_type' component='input' type='radio' value='internal'/>
                            <span className="label-inline">Use internal SCEP service</span>
                        </label>
                        <p>Your devices will contact this server directly to request their identity certificate.
                    Use this if you are testing or developing commandment.</p>
                    </div>
                    <div className='column'>
                        <label>
                            <Field name='scep_type' component='input' type='radio' value='external'/>
                            <span className="label-inline">Use external SCEP service</span>
                        </label>
                        <p>Devices will contact an external service to request their identity certificate.</p>
                    </div>
                </div>
                <fieldset>
                    <hr />

                    <div className='row'>
                        <div className='column'>
                            <label htmlFor='scepUrl'>URL</label>
                            <Field id='scepUrl' name='scep_url' component='input' type='text'
                                   placeholder='eg. http://scep.example.com/scep'/>
                            <div className='float-right'>
                                <button className="button button-outline">Test</button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='column'>
                            <label htmlFor='scepChallenge'>Challenge</label>
                            <Field id='scepChallenge' name='scep_challenge' component='input' type='password'/>
                        </div>
                        <div className='column'>
                            <label htmlFor='scepChallengeConfirm'>Challenge (Confirm)</label>
                            <Field id='scepChallengeConfirm' name='scep_challenge_confirm' component='input' type='password'/>
                        </div>
                    </div>



                    <label htmlFor='scepSubject'>Request Subject</label>
                    <Field id='scepSubject' name='scep_subject' component='input' type='text' placeholder='O=Commandment/OU=IT/CN=%HardwareUUID%'/>

                    <input className="button-primary" type="submit" value="Save"/>
                </fieldset>
            </form>
        )
    }
}