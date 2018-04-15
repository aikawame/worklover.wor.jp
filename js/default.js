FontAwesomeConfig = { searchPseudoElements: true };

document.addEventListener('DOMContentLoaded', function() {
  const styles = getComputedStyle(document.documentElement);

  const iconSize       = String(styles.getPropertyValue('--size-icon')).trim();
  const baseColor      = String(styles.getPropertyValue('--color-base')).trim();
  const lightBgcolor   = String(styles.getPropertyValue('--bgcolor-light')).trim();
  const profileBgcolor = String(styles.getPropertyValue('--bgcolor-profile')).trim();

  const hatebloSnsIcon = document.getElementById('sns-icon-hateblo');
  hatebloSnsIcon.addEventListener('load', function () {
    const doc = document.getElementById('sns-icon-hateblo').contentDocument;
    const svg = doc.getElementsByTagName('svg')[0];
    svg.setAttribute('viewBox', '48 48 204 204');
    svg.setAttribute('width', 100);
    svg.setAttribute('height', 100);
    doc.getElementsByTagName('path')[0].setAttribute('fill', baseColor);
    hatebloSnsIcon.setAttribute('style', 'width:' + iconSize);
  });

  const qiitaSnsIcon = document.getElementById('sns-icon-qiita');
  qiitaSnsIcon.addEventListener('load', function() {
    const doc = document.getElementById('sns-icon-qiita').contentDocument;
    const svg = doc.getElementsByTagName('svg')[0];
    svg.setAttribute('viewBox', '-16 -16 272 272');
    svg.setAttribute('width', 100);
    svg.setAttribute('height', 100);
    doc.getElementsByTagName('rect')[0].setAttribute('display', 'none');
    qiitaSnsIcon.setAttribute('style', 'width:' + iconSize);
  });

  const wantedlySnsIcon = document.getElementById('sns-icon-wantedly');
  wantedlySnsIcon.addEventListener('load', function() {
    const doc = document.getElementById('sns-icon-wantedly').contentDocument;
    const svg = doc.getElementsByTagName('svg')[0];
    svg.setAttribute('viewBox', '241 241 85 85');
    svg.setAttribute('width', 100);
    svg.setAttribute('height', 100);
    doc.getElementsByClassName('st0')[0].setAttribute('style', 'fill:' + baseColor);
    doc.getElementsByClassName('st1')[0].setAttribute('display', 'none');
    wantedlySnsIcon.setAttribute('style', 'width:' + iconSize);
  });

  const snsAnchors = document.getElementsByClassName('sns-list')[0].getElementsByTagName('a');
  Array.prototype.forEach.call(snsAnchors, function(snsAnchor, index) {
    let snsIcon = document.getElementsByClassName('sns-icon')[index];
    let snsName = document.getElementsByClassName('sns-name')[index];
    snsAnchor.addEventListener('mouseover', function() {
      snsIcon.setAttribute('style', 'background-color:' + profileBgcolor);
      snsName.setAttribute('style', 'color:' + profileBgcolor);
    });
    snsAnchor.addEventListener('mouseout', function() {
      snsIcon.setAttribute('style', 'background-color:' + lightBgcolor);
      snsName.setAttribute('style', 'color:' + baseColor);
    });
  });
});
