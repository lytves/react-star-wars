import {useState} from "react";

export const withApiError = View => {
    return props => {
        const [apiError, setApiError] = useState(false)
        return (
            <>
                {apiError
                    ? <h2>Error</h2>
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

