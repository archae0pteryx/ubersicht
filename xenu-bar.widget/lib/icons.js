const Icon = ({ width, height, children, ...props }) => (
  <svg
    viewBox={`0 0 0 0`}
    width={width}
    height={height}
    {...props}
  >
    {children}
  </svg>
)

const dockerBlue = 'white'

const icon_size = '200'

export const DockerIcon = (props) => (
  <Icon width={icon_size} height={icon_size} {...props}>
    <path
      stroke={dockerBlue}
      stroke-width='40'
      d='M296 226h42m-92 0h42m-91 0h42m-91 0h41m-91 0h42m8-46h41m8 0h42m7 0h42m-42-46h42'
    />
    <path
      fill={dockerBlue}
      d='m472 228s-18-17-55-11c-4-29-35-46-35-46s-29 35-8 74c-6 3-16 7-31 7H68c-5 19-5 145 133 145 99 0 173-46 208-130 52 4 63-39 63-39'
    />
  </Icon>
)