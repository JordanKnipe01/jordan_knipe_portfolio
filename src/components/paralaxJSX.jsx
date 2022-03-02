import React, {Fragment} from 'react';

function paralaxJSX(JSXElement, weight){
    return class extends React.Component{
        constructor(props){
            super(props);

            this.state={
            start_position: null,
            ease: 0.05,
            WrappedJSXElement: <Fragment></Fragment>
            }
        }

        componentDidMount(){
            this.last_offset = 0;
            this.animation_running = false;
            this.wrappedJSXElement = null;

            const ref = React.createRef();

            const JSXElementWithRef = React.cloneElement(
                JSXElement,
                { ...JSXElement.props, ref: ref}
                )

                this.setState({
                    ease: weight,
                    WrappedJSXElement: JSXElementWithRef
                }, () => {
                    this.setState({start_position: ref.current.offsetTop}, () =>{
                        this.wrappedJSXElement = ref;
                        document.addEventListener('scroll', this.animate_scroll);
                });
            });
        }

        render(){
            return( 
            <Fragment>

            </Fragment>
            )}
    }
}