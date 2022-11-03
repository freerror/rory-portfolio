const HEAD = (
  <div key="head" className="w-14 h-14 rounded-full border-[7px] border-black absolute top-[44px] right-[-12px]" />
)

const BODY = (
  <div key="body" className="w-2 h-28 absolute right-[12px] top-[95px] bg-black" />
)

const RIGHT_ARM = (
  <div key="right_arm" className="w-20 h-2 absolute right-[-65px] top-[110px] bg-black rotate-[-30deg] origin-bottom-left" />
)
const LEFT_ARM = (
  <div key="left_arm" className="w-20 h-2 absolute right-[17px] top-[110px] bg-black rotate-[30deg] origin-bottom-right" />
)
const RIGHT_LEG = (
  <div key="right_leg" className="w-28 h-2 absolute right-[-92px] top-[200px] bg-black rotate-[60deg] origin-bottom-left" />
)
const LEFT_LEG = (
  <div key="left_leg" className="w-28 h-2 absolute right-[12px] top-[200px] bg-black rotate-[-60deg] origin-bottom-right" />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
  guessesCount: number
}


const HangmanDrawing = (props: HangmanDrawingProps) => {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, props.guessesCount)}
      <div className="h-12 w-2 bg-black ml-[236px] absolute" />
      <div className="h-3 w-[120px] bg-black ml-[122px]" />
      <div className="h-96 w-3 bg-black ml-[122px]" />
      <div className="h-3 w-64 bg-black" />
    </div>
  )
}

export default HangmanDrawing