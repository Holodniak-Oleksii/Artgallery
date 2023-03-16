const handlerTravel = (e, id, setTravel, travel, ref) => {
  if (travel.clicked) {
    let element = e.target;
    let rect = element.getBoundingClientRect();
    let container = ref.current.getBoundingClientRect();

    setTravel({
      last: travel.current,
      current: rect.left - container.left,
      active: id,
      clicked: false,
    });
    setTimeout(() => {
      setTravel((prev) => ({
        ...prev,
        clicked: true,
      }));
    }, 1200);
  }
};
export default handlerTravel;
