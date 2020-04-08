import React, {createContext} from 'react';

export const LanguageContext = createContext()

class LanguageContextProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            language: "en",
        }
    }
    render() {
        return(<LanguageContext.Provider value={{...this.state}}>
            {this.props.children}
        </LanguageContext.Provider>)
    }
}
export default LanguageContextProvider
