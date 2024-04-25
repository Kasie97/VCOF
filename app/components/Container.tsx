interface Props{
    children: React.ReactNode;
    className?: string;
    
}

const Container = ({children, className}: Props) => {
  return (
    <div 
    className={`max-w-screen-xxl mx-auto ${className}`}>{children}</div>
  )
}

export default Container

      // max-w-screen-xl //   This should come in the className before mx-auto if you want to set the max-width of the container and leave some space on the left and right side of the container.
