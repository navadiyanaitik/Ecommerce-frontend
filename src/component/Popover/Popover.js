import { useState } from "react";
import {
    useFloating,
    autoUpdate,
    offset,
    flip,
    shift,
    useDismiss,
    useRole,
    useClick,
    useInteractions,
    FloatingFocusManager,
    useId
} from "@floating-ui/react";


function Popover({ buttonContent, children, className, placement }) {
    const [isOpen, setIsOpen] = useState(false);

    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [
            offset(10),
            flip({ fallbackAxisSideDirection: "end" }),
            shift()
        ],
        whileElementsMounted: autoUpdate,
        placement: placement ? placement : 'left-start'
    });

    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([
        click,
        dismiss,
        role
    ]);

    const headingId = useId();

    return (
        <>
            <button ref={refs.setReference} {...getReferenceProps()}>
                {buttonContent}
            </button>
            {isOpen && (
                <FloatingFocusManager context={context} modal={false}>
                    <div
                        className={` ${className}`}
                        ref={refs.setFloating}
                        style={floatingStyles}
                        aria-labelledby={headingId}
                        {...getFloatingProps()}
                    >
                        {children}
                    </div>
                </FloatingFocusManager >
            )
            }
        </>
    );
}

export default Popover;
