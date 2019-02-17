export const fetchAllDMs = () => {
  return $.ajax({
    method: "GET",
    url: "api/dms",
  });
};

export const createDM = ({recipient_id}) => {
  return $.ajax({
    method: "POST",
    url: "api/dms",
    data: { recipient_id },
  });
};

export const destroyDM = dm_id => {
  return $.ajax({
    method: "DELETE",
    url: `api/dms/${dm_id}`,
  })
}