/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function OneContract() {
  return (
    <section
      className="air-card-hover ng-scope"
      data-ng-repeat="contract in vm.contracts"
      data-ng-click="vm.onClickContractTile(contract)"
      id="contract26184114"
    >
      <div
        data-ng-include
        data-ng-if="!vm.config.isClientView"
        src="'Resources/public/js/app/template/vendor/table.html'"
        className="ng-scope"
      >
        <div className="row ng-scope">
          <div className="col-lg-4 col-md-5 col-xs-10 qa-wm-fl-cl-tile d-flex flex-direction-column justify-content-space-between">
            <ng-include
              src="'Resources/public/js/app/template/vendor/tile.html'"
              className="ng-scope"
            >
              <div className="row qa-wm-fl-cl-title ng-scope">
                <div
                  data-ng-class="{'col-xs-9' : contract.catalogProject, 'col-xs-12' : !contract.catalogProject}"
                  className="col-xs-12"
                >
                  <p className="m-0">
                    <a
                      data-ng-href="/ab/f/contracts/26184114"
                      data-ng-click="freelancerLogging.onClickTile(contract);"
                      className="ellipsis d-block ng-binding"
                      title="Design Blog articles in Elementor - Arabic speaker"
                      target="_self"
                      data-wm-stop-propagation
                      href="/ab/f/contracts/26184114"
                    >
                      Design Blog articles in Elementor - Arabic speaker
                    </a>
                  </p>
                </div>
              </div>
              <div className="row qa-wm-fl-cl-client m-sm-bottom ng-scope">
                <div className="col-xs-6">
                  <strong className="m-0 ellipsis d-block ng-binding">
                    Belal Khaled
                  </strong>
                </div>
                <div className="text-muted text-right col-xs-6 ellipsis ng-binding">
                  incen
                </div>
              </div>
              <div
                className="row qa-wm-fl-cl-dates ng-scope"
                data-ng-if="!contract.isOffer"
              >
                <div className="col-xs-12">
                  <small
                    data-ng-if="vm.notCatalogDependent(contract);"
                    className="text-muted ng-scope"
                  >
                    <span className="ng-binding">Feb 3</span>-
                    <span
                      data-ng-if="contract.agreementEnd"
                      className="ng-binding ng-scope"
                    >
                      Feb 4
                    </span>

                  </small>
                </div>
                <div className="d-md-none m-md-top-bottom" />
              </div>
            </ng-include>
          </div>
          <div className="col-xs-2 d-md-none text-right">
            <ng-include
              data-ng-if="!contract.payroll || !vm.config.payrollFeatureEnabled"
              src="'Resources/public/js/app/template/vendor/menu.html'"
              className="ng-scope"
            >
              {/* ngIf: !contract.isOffer && vm.data.info[contract.agreementRid].isLoaded */}
              <up-c-dropdown
                secondary
                custom-element
                size="sm"
                align="end"
                data-ng-if="!contract.isOffer && vm.data.info[contract.agreementRid].isLoaded"
                page-title="Select"
                ng-on-closed="onMenuClosed()"
                data-wm-stop-propagation
                className="ng-scope sc-up-c-dropdown-h sc-up-c-dropdown-s is-fullscreen hydrated"
              >
                <div className="up-c-dropdown sc-up-c-dropdown">
                  <up-c-on-media-change className="sc-up-c-dropdown hydrated">
                    <up-c-on-click-outside className="sc-up-c-dropdown hydrated">
                      <up-c-transition
                        transition-type="modal"
                        className="sc-up-c-dropdown hydrated"
                      >
                        <div className="dropdown dropdown-secondary align-end sc-up-c-dropdown">
                          <up-c-dropdown-toggle className="sc-up-c-dropdown hydrated">
                            <button
                              className="btn btn-default btn-circle btn-sm sc-up-c-dropdown"
                              type="button"
                            >
                              <span className="sc-up-c-dropdown sc-up-c-dropdown-s">
                                <slot-fb
                                  name="icon"
                                  className="sc-up-c-dropdown"
                                >
                                  <up-c-icon
                                    className="sc-up-c-dropdown glyph-icon hydrated"
                                    size
                                  >
                                    <span className="sr-only">
                                      <slot-fb>more</slot-fb>
                                    </span>
                                    <up-c-load-svg className="hydrated"></up-c-load-svg>
                                    <span
                                      className="caret glyphicon air-icon-more"
                                      aria-hidden="true"
                                    />
                                  </up-c-icon>
                                </slot-fb>
                              </span>
                            </button>
                          </up-c-dropdown-toggle>
                          <ul className="dropdown-menu transition-content text-left sc-up-c-dropdown">
                            <up-c-dropdown-item
                              role="listitem"
                              className="hydrated"
                            >
                              <a
                                href="javascript:"
                                hr-dash-room
                                data-is-back-nav="true"
                                data-is-redirect-in-app="true"
                                data-ng-click="freelancerLogging.sendMessageClick(contract);"
                                data-item-type="'contract'"
                                data-company-rid="contract.companyOrgRid"
                                data-item-rid="contract.contractRid"
                                className="d-md-none ng-isolate-scope"
                              >
                                Send a message
                              </a>
                              <a
                                href="javascript:"
                                hr-dash-room
                                data-ng-click="freelancerLogging.sendMessageClick(contract);"
                                data-item-type="'contract'"
                                data-company-rid="contract.companyOrgRid"
                                data-item-rid="contract.contractRid"
                                className="d-none d-md-block ng-isolate-scope"
                              >
                                Send a message
                              </a>
                            </up-c-dropdown-item>
                            <up-c-dropdown-item
                              data-ng-if="!contract.isOffer && (!contract.agencyTeamOrgRid || vm.config.isAgencyView) && (!contract.isPtc || vm.config.isPTCContractProposalsEnabled)"
                              className="ng-scope hydrated"
                              role="listitem"
                            >
                              <a
                                data-ng-if="!vm.data.contractProposals[contract.agreementRid]"
                                target="_self"
                                data-ng-href="/ab/f/contracts/26184114/proposals/new?source=all_contracts"
                                data-ng-click="freelancerLogging.proposeNewContractClick(contract);"
                                className="ng-scope"
                                href="/ab/f/contracts/26184114/proposals/new?source=all_contracts"
                              >
                                Propose new contract
                              </a>
                            </up-c-dropdown-item>
                          </ul>
                        </div>
                      </up-c-transition>
                      <div className="initial-menu sc-up-c-dropdown sc-up-c-dropdown-s">
                        <ul
                          className="dropdown-menu text-left"
                          slot="menu"
                          data-ng-init="info = vm.data.info[contract.agreementRid]"
                        ></ul>
                      </div>
                    </up-c-on-click-outside>
                  </up-c-on-media-change>
                  <up-c-fullscreen className="sc-up-c-dropdown hydrated"></up-c-fullscreen>
                </div>
              </up-c-dropdown>
            </ng-include>
          </div>
          <div className="col-lg-7 col-md-6 col-xs-12 d-flex flex-direction-column justify-content-space-between">
            <div className="row">
              <div
                className="col-xs-6 qa-wm-fl-cl-terms col-xs-12"
                data-ng-class="{'col-xs-12': !contract.agencyTeamName}"
              >
                <ng-include
                  data-ng-if="!contract.isOffer"
                  src="'Resources/public/js/app/template/vendor/contract.html'"
                  className="ng-scope"
                >
                  <div
                    data-ng-if="contract.isHourly && vm.data.info[contract.agreementRid].isLoaded"
                    data-ng-init="info = vm.data.info[contract.agreementRid];"
                    className="ng-scope"
                  >
                    <div
                      data-ng-if="info.hourly_charge_rate"
                      className="ng-scope"
                    >
                      <strong className="ng-binding">$280.00</strong>/hr
                    </div>
                    <div
                      data-ng-if="info.limit > -1"
                      className="ng-binding ng-scope"
                    >
                      5 max hrs/wk
                    </div>
                  </div>
                  <p
                    data-ng-if="contract.isEnded"
                    className="m-0-top-bottom ng-binding ng-scope"
                  >
                    Completed Feb 4
                  </p>
                  <div
                    data-ng-if="vm.data.info[contract.agreementRid].isLoaded"
                    data-ng-init="feedback = vm.data.info[contract.agreementRid].feedback"
                    className="ng-scope"
                  >
                    <p
                      className="m-0-top-bottom ng-scope"
                      data-ng-if="feedback.score > 0"
                    >
                      <span
                        data-eo-rating
                        data-stars={5}
                        data-read-only="true"
                        data-rating-define="star"
                        data-ng-model="feedback.score"
                        data-real-value={5}
                        data-star-radius={10}
                        data-star-fill-color="#5bbc2e"
                        data-container-color="#F5F5F5"
                        className="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-not-empty"
                      ></span>
                    </p>
                    <div
                      className="stars"
                      ng-mousemove="changeRating($event)"
                      ng-mouseleave="leaveRating()"
                      style={{ visibility: "visible" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="#5BBC2E"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="#5BBC2E"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="#5BBC2E"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="#5BBC2E"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="#5BBC2E"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <p />
                  </div>
                </ng-include>
              </div>
            </div>
            <div className="row qa-wm-fl-cl-state">
              <div className="col-xs-12 m-sm-top">
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-1 d-none d-md-inline">
            <div className="row">
              <button className="mx-auto btn btn-light btn-circle btn-xl border-gray">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-three-dots d-block"
                  viewBox="0 0 16 16"
                  style={{ marginLeft: "-4px" }}
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div data-ng-if="contract.isHourly" className="ng-scope">
        <growth-mid-contract-raise-buttons
          data-closeable="true"
          data-contracts="vm.contracts"
          data-contract-rid="contract.contractRid"
          data-freelancer="vm.data.freelancers[contract.freelancerRid]"
          className="ng-isolate-scope"
        >
          <div
            className="mcfb-underlay"
            data-ng-click="buttonsController.stopEvent($event)"
          >
          </div>
        </growth-mid-contract-raise-buttons>
      </div>
    </section>
  );
}
