function StepShow({ components, step }) {
  const ComponentToShow = components[step];

  if (!ComponentToShow) return null;
  return (
    <>
      <ComponentToShow />
    </>
  );
}

export default StepShow;
