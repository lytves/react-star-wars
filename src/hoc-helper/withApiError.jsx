import {useState} from "react";
import ErrorMessage from '../components/ErrorMessage'

export const withApiError = View => {
    return props => {
        const [apiError, setApiError] = useState(false)
        return (
            <>
                {apiError
                    ? <ErrorMessage />
                    : (
                        <View
                            setApiError={setApiError}
                            {...props}
                        />
                    )
                }
            </>
        )
    }
}

