export function findSP(): Window {
  // old (SP as host)
  if (document.title == 'SP') return window;
  // new (SP as popup)
  return FocusNavController.m_ActiveContext.m_rgGamepadNavigationTrees.find((x: any) => x.m_ID == 'root_1_').Root
    .Element.ownerDocument.defaultView;
}
